import Header from "./Header.js";
import Panel from "./Panel.js";

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1>This is Gallery</h1>
      <div className="gallery-panel-container">
        <Panel
          status={<div className="panel-status">Trending</div>}
          heading={<h2>Data Science Bootcamp</h2>}
          body={
            <ul>
              <li>
                140 hours of live and interactive sessions by industry experts
              </li>
              <li>
                Immersive Learning with Guided Hands-on Exercises (Cloud Labs)
              </li>
            </ul>
          }
        />
        <Panel
          status={<div className="panel-status">Trending</div>}
          heading={<h2>Data Analytic Bootcamp</h2>}
          body={
            <ul>
              <li>
                140 hours of live and interactive sessions by industry experts
              </li>
              <li>
                Immersive Learning with Guided Hands-on Exercises (Cloud Labs)
              </li>
            </ul>
          }
        />
        <Panel
          status={<div className="panel-status">Trending</div>}
          heading={<h2>JavaScript Bootcamp</h2>}
          body={
            <ul>
              <li>
                140 hours of live and interactive sessions by industry experts
              </li>
              <li>
                Immersive Learning with Guided Hands-on Exercises (Cloud Labs)
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
}
