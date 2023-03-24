import Image from 'next/image';
import { Button } from '../Button';
import { Arrow } from '../SVGs/Arrow';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { useWindowSize } from "@/hooks/useWindowSize";

interface Props {
	onSignUpClick: () => void;
}

export function NewsLetters(props: Props) {
  const { width, height } = useWindowSize();
	const isMobile = (width || 0) < 595;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll('#container');
    const container: HTMLElement = document.querySelector('#container')!;

    gsap.to(components, {
      x: -230,
      duration: 2,
      ease: 'none',
      opacity: -3,
      scrollTrigger: {
        trigger: '.box-1',
        start: 'top',
        end: 'center 20%',
        scrub: true,
        toggleActions: 'play none none onLeave '
      }
    });
  }, []) >
    useEffect(() => {
      const components = document.querySelectorAll('#container-right');
      const container: HTMLElement =
        document.querySelector('#container-right')!;

      gsap.to(components, {
        x: -800,
        duration: 4,
        ease: 'none',
        opacity: 2,
        scrollTrigger: {
          trigger: '.box-1',
          start: 'top',
          end: 'center 20%',
          scrub: true,
          toggleActions: 'play none none reset'
        }
      });
    }, []);

  return (
    <section id="news-letters" className={styles.background}>
      <div className={styles.section_container}>
        <div>
          <div className={styles.content}>
            <header>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </h5>
            </header>
            <Button
							design="primary"
							className={styles.custom_button}
							onClick={props.onSignUpClick}
						>
              SIGN UP NOW
              <Arrow fill="#fff" width={12} height={12} />
            </Button>
          </div>

          <div className={styles.pills}>
            <span>Cryptos</span>
            <span>NFTs</span>
            <span>Games</span>
          </div>
        </div>

        <div>
        {!isMobile ? (
					<div className={styles.hero_img} id="container" className={styles.container}>
						<Image
							src="/images/woman_tablet.png"
							alt="Woman looking at tablet"
							width={464 + 32}
							height={499}
						/>
					</div>
				) : undefined}
          <div id="container-right" className={styles.containerRight}>
            <Image
              src="/images/man_cellphone.png"
              alt="Woman looking at tablet"
              width={464 + 32}
              height={499}
              className="scroll"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
