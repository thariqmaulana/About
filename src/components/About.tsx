import { Header, type NavLink } from './Header';
const navLinks: NavLink[] = [
  { label: 'Tech', href: 'tech', emoji: '⚙️' },
  { label: 'Contact', href: 'contact', emoji: '📪' },
];

export const About: React.FC = () => {
  return (
    <>
      <Header title="Thariq Maulana" navLinks={navLinks} />
      <main>
        <article id="about" className="main__article">
          <section className="main__section">
            <h1 className="main__title">Hi, my name is</h1>
            <p className="main__name">Thariq Maulana.</p>
            <p className="main__description">
              I'm a software engineer with a specialization in web development.
              I work on both frontend and backend. My focus is creating an
              efficient and scalable applications.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};
