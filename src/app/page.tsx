import Container from '../../components/container';
import Header from '../../components/header';
import MainSection from '../../components/main';
import SectionTitle from '../../components/section-title';
import Backend from '../../components/skills/backend';
import Database from '../../components/skills/database';
import Frontend from '../../components/skills/frontend';
import Other from '../../components/skills/other';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-bg-color pt-8'>
        <Container>
          <Header />
          <MainSection />
        </Container>
      </section>
      <section className='bg-bg-lighter-color py-section-padding'>
        <Container>
          <SectionTitle title='Skills' />

          <div className='flex flex-col gap-12'>
            <Frontend />
            <Backend />
            <Database />
            <Other />
          </div>
        </Container>
      </section>
      <section className='py-section-padding'>
        <Container>
          <SectionTitle title='Projects' />
        </Container>
      </section>
      <section className='bg-bg-lighter-color py-section-padding'>
        <Container>
          <SectionTitle title='Experience' />
        </Container>
      </section>
      <section className='py-section-padding'>
        <Container>
          <div></div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
