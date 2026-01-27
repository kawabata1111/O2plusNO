<?php
//////////////////////////////////////////////////////////////////////
//
//  benefit/index.php
//
//   概要  :      無料個別相談会フォーム
//   作成日:      2021/05/14
//   改定日:      
//   備考  :      
//
//////////////////////////////////////////////////////////////////////

$_root_path = "../";

require_once($_root_path . "phplib/common.inc.php");
require_once($_root_path . "phplib/LibForm.class.php");
require_once($_root_path . "phplib/LibTemplete.class.php");

//****** ご希望の日程設定　ここから
$nittei_values = array(
    "2021年5月23日（日）19：00～21：00",
    "2021年5月26日（水）12：00～14：00",
    "2021年5月26日（水）19：00～21：00",
    "2021年5月30日（日）12：00～14：00",
    "2021年5月30日（日）19：00～21：00",
    "2021年6月6日（日）12：00～14：00",
    "2021年6月6日（日）19：00～21：00",
    "2021年6月9日（水）12：00～14：00",
    "2021年6月9日（水）19：00～21：00",
    "2021年6月13日（日）12：00～14：00",
    "2021年6月13日（日）19：00～21：00",
    "2021年6月16日（水）12：00～14：00",
    "2021年6月16日（水）19：00～21：00",
    "2021年6月20日（日）12：00～14：00",
    "2021年6月20日（日）19：00～21：00",
    "2021年6月23日（水）12：00～14：00",
    "2021年6月23日（水）19：00～21：00",
    "2021年6月27日（日）12：00～14：00",
    "2021年6月27日（日）19：00～21：00",
    "2021年6月30日（水）12：00～14：00",
    "2021年6月30日（水）19：00～21：00",
);
//****** ご希望の日程設定　ここまで

//##### 設定項目
$_conf['mail_email_col'] = "email";							// 管理者メールfromと確認メールtoに利用するinput項目
$_conf['mail_admin'] = "o2plusno20171011@gmail.com";				// 管理者メールto
$_conf['mail_sub'] = "【個別相談会】フォームからお申し込みがありました";		// 管理者メールsub
$_conf['mail_kakunin_from'] = "o2plusno20171011@gmail.com";			// 確認メールfrom
$_conf['mail_kakunin_fromname'] = "大野研吾";		// 確認メールfromname
$_conf['mail_kakunin_sub'] = "【個別相談会】お申し込みありがとうございます";	// 確認メールsub

//##### フォーム項目設定
$_conf['form_datas'] = array(
	"nittei" => array(
        "label" => "ご希望の日程",
        "select_vals" => $nittei_values,
        "validate" => array(
            "required" => array(
                "rule" => "true",
                "mes" => "必須項目です",
            ),
        ),
    ),
	"name" => array(
		"label" => "お名前",
		"validate" => array(
			"required" => array(
				"rule" => "true",
				"mes" => "必須項目です",
			),
			"maxlength" => array(
				"rule" => "100",
				"mes" => "入力内容が長すぎます",
			),
		),
	),
	"furigana" => array(
		"label" => "フリガナ",
		"validate" => array(
			"required" => array(
				"rule" => "true",
				"mes" => "必須項目です",
			),
			"katakana" => array(
				"rule" => "true",
				"mes" => "全角カタカナで入力してください",
			),
			"maxlength" => array(
				"rule" => "100",
				"mes" => "入力内容が長すぎます",
			),
		),
	),
	"email" => array(
		"label" => "E-mail",
		"validate" => array(
			"required" => array(
				"rule" => "true",
				"mes" => "必須項目です",
			),
			"email" => array(
				"rule" => "true",
				"mes" => "メールアドレスの形式が正しくありません",
			),
		),
	),
	"tel" => array(
		"label" => "お電話番号",
		"validate" => array(
			"required" => array(
				"rule" => "true",
				"mes" => "必須項目です",
			),
			"tel" => array(
				"rule" => "true",
				"mes" => "電話番号が正しくありません",
			),
			"maxlength" => array(
				"rule" => "13",
				"mes" => "入力内容が長すぎます",
			),
		),
	),
	"comment" => array(
		"label" => "備考欄",
		"validate" => array(
			// 無し
		),
	),
);
$_conf['form_groups'] = array();

// クラス初期化
$libTemplete = new LibTemplete(null, $_root_path . "cache/");
$libForm = New LibForm($_conf['form_datas'], $_conf['form_groups']);

if(!isset($_GET['p'])) $_GET['p'] = "";
if($_GET['p'] == "e"){
	finish_page();
}
else if($_GET['p'] == "c"){
	confirm_page();
}
else if($_GET['p'] == "v"){
	validate_output();
}
else{
	input_page();
}

// バリデーションJavaScript出力
function validate_output()
{
	global $libForm, $libTemplete;
	
	header('Content-Type: application/javascript; charset=UTF-8');
	
	// js出力
	$context = array(
		"rules" => $libForm->getValidateRules(),
		"messages" => $libForm->getValidateMessages(),
		"groups" => $libForm->getValidateGroups(),
		"group_messageid" => $libForm->getValidateErrorPlacement(),
	);
	$libTemplete->include_template("index_validate_tpl.js", $context);
}

// フォーム画面出力
function input_page()
{
	global $libForm, $libTemplete;
	
	// html出力
	$context = array(
		"datas" => $libForm->formDatas,
		"next_url" => "?p=c",
		"errors" => array(),
	);
	$libTemplete->include_template("index_input_tpl.html", $context);
}

// 確認画面出力
function confirm_page()
{
	global $libForm, $libTemplete;
	
	// サーバ側バリデーション
	$v = $libForm->initServerValidate();

	// カスタムバリデーション追加（あれば）
	// $v->rule('regex', "xxxxx", "/^([ァ-ヶー 　]+)$/u");
	// 参考：https://github.com/vlucas/valitron

	if(!$v->validate()) {
		// html出力
		$context = array(
			"datas" => $libForm->formDatas,
			"next_url" => "?p=c#app",
			"errors" => $libForm->valitronErrorsToArray($v->errors()),
		);
		$libTemplete->include_template("index_input_tpl.html", $context);
		return;
	}
	
	// データチェック
	if(!$libForm->isDataSuccess()) {
		redirect_url(parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH));
	}

	// 改行を<br>に変更
	$libForm->changeValueBr();

	// html出力
	$context = array(
		"datas" => $libForm->formDatas,
		"next_url" => "?p=e",
		"back_url" => "?#app",
	);
	$libTemplete->include_template("index_confirm_tpl.html", $context);
}

// 完了画面出力
function finish_page()
{
	global $_conf, $libForm, $libTemplete;
	
	// データチェック
	if(!$libForm->isDataSuccess()) {
		redirect_url(parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH));
	}

	// メール初期化
	$libForm->initMail();

	// メール送信（管理者）
	$libForm->sendMail(
		$_conf['mail_admin'],										// to
		$libForm->formDatas->{$_conf['mail_email_col']}->value,		// from
		"",															// fromname
		$_conf['mail_sub'],											// sub
		body_admin($libForm->formDatas)								// body
	);

	// メール送信（確認メール）
	$libForm->sendMail(
		$libForm->formDatas->{$_conf['mail_email_col']}->value,		// to
		$_conf['mail_kakunin_from'],								// from
		$_conf['mail_kakunin_fromname'],							// fromname
		$_conf['mail_kakunin_sub'],									// sub
		body_kakunin($libForm->formDatas)							// body
	);

	// セッションクリア
	$libForm->clearSession();

	// html出力
	$context = array();
	$libTemplete->include_template("index_finish_tpl.html", $context);
}

// メール本文作成（管理者）
function body_admin()
{
	global $_conf, $libForm;

	return <<<EOP
{$_conf['mail_sub']}からの送信です。
ご対応をお願いいたします。
----------------------------------------------------------------
[ご希望の日程]
{$libForm->formDatas->nittei->value}

[名前]
{$libForm->formDatas->name->value}

[フリガナ]
{$libForm->formDatas->furigana->value}

[E-mail]
{$libForm->formDatas->email->value}

[お電話番号]
{$libForm->formDatas->tel->value}

[備考欄]
{$libForm->formDatas->comment->value}
----------------------------------------------------------------
送信時刻　　　　：{$libForm->sendTime}
送信者情報　　　：{$libForm->getHostName()}

EOP;
}

// メール本文作成（確認メール）
function body_kakunin()
{
	global $_conf, $libForm;

	return <<<EOP
この度はお問い合わせありがとうございます。

下記の内容にて送信いただきました。
追って担当者より連絡させていただきます。

■入力内容
----------------------------------------------------------------
[ご希望の日程]
{$libForm->formDatas->nittei->value}

[名前]
{$libForm->formDatas->name->value}

[フリガナ]
{$libForm->formDatas->furigana->value}

[E-mail]
{$libForm->formDatas->email->value}

[お電話番号]
{$libForm->formDatas->tel->value}

[備考欄]
{$libForm->formDatas->comment->value}
----------------------------------------------------------------

※フォームでのお問合せは、ご返答にお時間を頂く場合がございます。
予め、ご了承ください。

================================
合同会社O2plusNO
================================
〒160-0023
東京都新宿区西新宿7-22-3 BPビルANNEX102

電話番号：090-5752-2668
メールアドレス：o2plusno20171011@gmail.com

EOP;
}
