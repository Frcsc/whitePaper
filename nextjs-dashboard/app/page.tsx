import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.mainContainer}>
        <div className={styles.acmeLogo}>
            <AcmeLogo />
        </div>
        <div className={styles.outerContainer}>
            <div className={styles.innnerContainer}>
                <div className={styles.shape}/>
                <p className={`${styles.innnerContainerParagraph} ${lusitana.className} antialiased`}>
                    <strong>Welcome to Bayati.</strong> This is the example for the{' '}
                    <a href="https://nextjs.org/learn/" className="text-blue-500">
                    Next.js Learn Course
                    </a>
                    , brought to you by Vercel.
                </p>
                <Link href="#" className={styles.loginLink}>
                    <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
            </div>
            <div className={styles.imageHero}>
                <Image
                    src="/hero-desktop.png"
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
                <Image
                    src="/hero-mobile.png"
                    width={1000}
                    height={760}
                    className="block md:hidden"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
            </div>
        </div>
    </main>
  );
}
