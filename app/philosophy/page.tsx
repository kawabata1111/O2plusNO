import PageHeader from '@/components/ui/PageHeader';
import PhilosophySection from '@/components/ui/Philosophy';
import MessageSection from '@/components/ui/Message';
import ContactSection from '@/components/ui/Contact';

export default function PhilosophyPage() {
    return (
        <main>
            <PageHeader 
                title="企業理念" 
                enTitle="PHILOSOPHY"
                subtitle="01_PHILOSOPHY" 
            />
            <PhilosophySection />
            <MessageSection />
            <ContactSection />
        </main>
    );
}
