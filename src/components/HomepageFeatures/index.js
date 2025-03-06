import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AWS Certified Solutions Architect – Professional',
    Svg: require('@site/static/img/aws-pro.svg').default,
    description: (
      <>
       This certification is difficult for me to get. But it is a good motivation for my continuous learning.
      </>
    ),
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    Svg: require('@site/static/img/aws-assoc.svg').default,
    description: (
      <>
        My first AWS certification. It teaches me a lot about AWS. I'm so proud of it.
      </>
    ),
  },
  {
    title: 'Alibaba Cloud Certified Associate - Cloud Computing',
    Svg: require('@site/static/img/alibaba-cloud.svg').default,
    description: (
      <>
        My first cloud certification, I always remember it. It opened my eyes to the cloud world.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
