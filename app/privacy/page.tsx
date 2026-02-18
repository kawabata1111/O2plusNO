'use client';

import PageHeader from '@/components/ui/PageHeader';
import ContactSection from '@/components/ui/Contact';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <main>
            <PageHeader 
                title="プライバシーポリシー" 
                enTitle="PRIVACY POLICY" 
                subtitle="05_LEGAL" 
            />
            
            <section className="py-20 md:py-40 bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-slate-900 relative overflow-hidden">

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/60 backdrop-blur-sm border border-slate-200 p-8 md:p-16 relative shadow-sm rounded-sm"
                    >
                        {/* Decorative Markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500" />

                        <div className="mb-12 border-b border-slate-200 pb-8">
                            <p className="font-cinzel text-xs tracking-widest text-slate-400 mb-4 font-bold">
                                LAST_UPDATED: 2026.01.13
                            </p>
                            <p className="text-sm leading-loose font-sans">
                                合同会社O2plusNO（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                            </p>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">01</span>
                                    個人情報の定義
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose font-sans">
                                    「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">02</span>
                                    個人情報の収集方法
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose font-sans">
                                    当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">03</span>
                                    個人情報の利用目的
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose mb-4 font-sans">
                                    当社が個人情報を利用する目的は、以下のとおりです。
                                </p>
                                <ul className="list-disc list-inside text-sm text-slate-600 leading-loose pl-4 marker:text-cyan-500 font-sans">
                                    <li>当社サービスの提供・運営のため</li>
                                    <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                                    <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                                    <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                                    <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                                    <li>上記の利用目的に付随する目的</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">04</span>
                                    利用目的の変更
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose font-sans">
                                    当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                                    利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">05</span>
                                    個人情報の第三者提供
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose font-sans">
                                    当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-cyan-600 font-cinzel text-xs font-bold">06</span>
                                    お問い合わせ窓口
                                </h3>
                                <p className="text-sm text-slate-600 leading-loose font-sans">
                                    本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br/><br/>
                                    住所：〒332-0016 埼玉県川口市幸町2-7-26 シミズビル C-59<br/>
                                    社名：合同会社O2plusNO<br/>
                                    代表者：大野 研吾<br/>
                                    Eメールアドレス：o2plusno20171011@gmail.com
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
