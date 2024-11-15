import Section from "../components/layout/section";
import Grid from "../components/layout/grid";
import Flow from "../components/layout/flow";
import Previous from "../components/text/previous";
import Title from "../components/text/title";
import Card from "../components/rooms/card";

function HomePage() {
  return (
    <div>
      <main className="min-h-full bg-hero"></main>
      <Section>
        <Flow>
          <div>
            <div className="block-box">
              <Previous>About Us</Previous>
              <Title Tag="h1">A Boutique Hotel in the heart of New York</Title>
            </div>
            <div className="global--p text-space">
              <p>
                Welcome to the best five-star deluxe hotel in New York. Hotel
                elementum suen theaucan vestibulum aliquam justo in sapien
                rutrum volutpat donec in quis the pellentesque velit sonec id
                velit ac arcu posuere blane.
              </p>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the aucan ligulation. Orci varius natoque penatibus et magnis
                dis parturient monte naete ridiculus mus nellentesque habitant
                morbine.
              </p>
            </div>
          </div>
          <div className="placement grid items-center">
            <img className="placement-1" src="./images/about-1.jpg" alt="" />
            <img className="placement-2" src="./images/about-2.jpg" alt="" />
          </div>
        </Flow>
      </Section>
      <Section>
        <div className="text-center block-box">
          <Previous>Harrison Hotel</Previous>
          <Title Tag="h2">Rooms & Suites</Title>
        </div>
        <div>
          <Grid>
            <Card title="Junior Suite" price={150} />
            <Card title="Family Room" price={200} />
            <Card title="Double Room" price={250} />
          </Grid>
          <Grid>
            <Card title="Hostel Rooms" price={50} />
          </Grid>
        </div>
      </Section>
    </div>
  );
}

export default HomePage;
