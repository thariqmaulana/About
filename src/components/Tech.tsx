import { Header, type NavLink } from './Header';
const navLinks: NavLink[] = [
  { label: 'About', href: '', emoji: '🦰' },
  { label: 'Contact', href: 'contact', emoji: '📪' },
];

export const Tech: React.FC = () => {
  return (
    <>
      <Header title="Tech Stack" navLinks={navLinks} />
      <main>
        <article id="tech" className="main__article-tech">
          <section className="main__section-tech">
            <div className="main__tech-stack">
              <div>
                <ul>
                  <li>
                    <i
                      className="fa-brands fa-html5 fa-xl tech-icon"
                      style={{ color: '#a21111' }}
                      title="HTML5"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-css3-alt fa-xl tech-icon"
                      style={{ color: '#264de4' }}
                      title="CSS3"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-js-square fa-xl tech-icon"
                      style={{ color: '#f7df1e' }}
                      title="JavaScript"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i
                      className="fa-brands fa-bootstrap fa-xl tech-icon"
                      style={{ color: '#563d7c' }}
                      title="Bootstrap"
                    />
                  </li>
                  <li>
                    <img
                      src="https://cdn.simpleicons.org/tailwindcss/06b6d4"
                      alt="Tailwind CSS"
                      width={60}
                      height={60}
                      className="tech-icon tech-icon-tailwind"
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                      title="Tailwind CSS"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-react fa-xl tech-icon"
                      style={{ color: '#61dafb' }}
                      title="React.js"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-vuejs fa-xl tech-icon"
                      style={{ color: '#41b883' }}
                      title="Vue.js"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i
                      className="fa-brands fa-node-js fa-xl tech-icon"
                      style={{ color: '#8cc84b' }}
                      title="Node.js"
                    />
                  </li>
                  <li>
                    <img
                      src="https://cdn.simpleicons.org/nestjs/ea2845"
                      alt="NestJS"
                      width={60}
                      height={60}
                      className="tech-icon tech-icon-nestjs"
                      style={{ verticalAlign: 'middle' }}
                      title="Nest.js"
                    />
                  </li>
                  <li>
                    <img
                      src="https://cdn.simpleicons.org/express/000000"
                      alt="Express.js"
                      width={60}
                      height={60}
                      className="tech-icon tech-icon-express"
                      style={{ verticalAlign: 'middle' }}
                      title="Express.js"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-php fa-xl tech-icon"
                      style={{ color: '#777bb3' }}
                      title="PHP"
                    />
                  </li>
                  <li>
                    <img
                      src="https://cdn.simpleicons.org/laravel/ff2d20"
                      alt="Laravel"
                      width={60}
                      height={60}
                      className="tech-icon tech-icon-laravel"
                      style={{ verticalAlign: 'middle' }}
                      title="Laravel"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i
                      className="fa-brands fa-git-alt fa-xl tech-icon"
                      style={{ color: 'hsl(9, 86%, 57%)' }}
                      title="Git"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-github fa-xl tech-icon"
                      style={{ color: '#181717' }}
                      title="GitHub"
                    />
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-database fa-xl tech-icon"
                      style={{ color: '#4479a1' }}
                      title="Relational Database"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};
