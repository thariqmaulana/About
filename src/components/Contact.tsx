import { Header, type NavLink } from './Header';
const navLinks: NavLink[] = [
  { label: 'About', href: '', emoji: '🦰' },
  { label: 'Tech', href: 'tech', emoji: '⚙️' },
];

export const Contact: React.FC = () => {
  return (
    <>
      <Header title="Tech Stack" navLinks={navLinks} />
      <main>
        <article className="main__article-contact">
          <section className="main__section-contact">
            <div>
              <i
                className="fa-solid fa-envelope fa-xl"
                style={{ color: '#4faab0' }}
              />
            </div>
            <div className="main__section-title-contact">Gmail</div>
            <div className="main__section-description-contact">
              <p>
                For job opportunities, collaborations, or any inquiries, feel
                free to reach out via email. I usually respond within 24 hours.
              </p>
            </div>
            <div className="main__anchor-contact">
              <a href="mailto:thariqmaulana01@gmail.com">
                Let us connect <i className="fa-solid fa-paper-plane fa-sm" />
              </a>
            </div>
          </section>
          <section className="main__section-contact">
            <div>
              <i
                className="fa-brands fa-whatsapp fa-xl"
                style={{ color: '#4faab0' }}
              />
            </div>
            <div className="main__section-title-contact">Whatsapp</div>
            <div className="main__section-description-contact">
              <p>
                You can reach me via WhatsApp for quick communication. feel free
                to drop me a message anytime.
              </p>
            </div>
            <div className="main__anchor-contact">
              <a href="https://wa.me/62895379396070">
                Let us connect <i className="fa-solid fa-paper-plane fa-sm" />
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};
