import Contact from '../../components/contact';
import ContactForm from '../../components/contact-form';
import Container from '../../components/container';
import Header from '../../components/header';
import MainSection from '../../components/main';
import ProjectCard from '../../components/projects/project-card';
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
      <section
        className={`bg-bg-lighter-color py-section-padding bg-[url('/skills-bg.svg')]`}
      >
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
          <div className='grid grid-cols-3 gap-8'>
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
              hasGithub={true}
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
            <ProjectCard
              id={1}
              title='Test'
              subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est facere
      quo. Vitae aspernatur fuga vel et illo, ipsum molestias quasi obcaecati
      voluptates incidunt saepe assumenda maiores nemo impedit repudiandae.`}
              image='/projects/1.jpg'
            />
          </div>
        </Container>
      </section>
      <section className='bg-bg-lighter-color py-section-padding'>
        <Container>
          <SectionTitle title='Experience' />
        </Container>
      </section>
      <section className='py-section-padding'>
        <Container>
          <SectionTitle title='Contact Me' />
          <Contact />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
