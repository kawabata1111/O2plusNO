import DecodeText from '@/components/ui/DecodeText';

export default function Footer() {
    return (
        <footer className="relative z-50 bg-[#020202] text-white py-16 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    
                    {/* Company Info Header */}
                    <div>
                        <h2 className="text-2xl font-cinzel font-bold mb-6 tracking-widest text-[#d4a853]">
                            <DecodeText text="O2plusNO INC." />
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                            自分の力で生き抜ける人を増やし、<br/>
                            その力を利他に向けることができる社会の創造。
                        </p>
                        <div className="text-[10px] text-gray-500 space-y-1 tracking-[0.2em] uppercase">
                            <p>Independence × Creation × Altruism</p>
                            <p>Be Your True Self</p>
                        </div>
                    </div>

                    {/* Company Details Table */}
                    <div>
                        <h3 className="text-[#d4a853] font-bold text-xs tracking-[0.3em] mb-8 uppercase">Company Profile</h3>
                        <dl className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-y-4 gap-x-4 text-sm text-gray-400 font-light">
                            
                            <dt className="font-medium text-gray-500 sm:border-r sm:border-white/10 sm:pr-4">社名</dt>
                            <dd>合同会社O2plusNO</dd>

                            <dt className="font-medium text-gray-500 sm:border-r sm:border-white/10 sm:pr-4">代表者</dt>
                            <dd>大野 研吾</dd>

                            <dt className="font-medium text-gray-500 sm:border-r sm:border-white/10 sm:pr-4">所在地</dt>
                            <dd>
                                〒351-0014<br/>
                                埼玉県朝霞市膝折町1-1-53
                            </dd>

                            <dt className="font-medium text-gray-500 sm:border-r sm:border-white/10 sm:pr-4">連絡先</dt>
                            <dd>
                                TEL: 050-5527-6238<br/>
                                Email: o2plusno20171011@gmail.com
                            </dd>

                        </dl>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <div className="mb-4">
                        <a href="/privacy" className="text-[10px] text-gray-500 hover:text-[#d4a853] transition-colors tracking-widest uppercase">
                            Privacy Policy
                        </a>
                    </div>
                    <p className="text-[10px] text-gray-600 tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} O2plusNO. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
