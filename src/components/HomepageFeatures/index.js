import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Keyboards',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        I'm dedicated to making better keyboards, even if they aren't designed for the majority.
      </>
    ),
  },
  {
    title: 'Development Boards',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Great tool for developing keyboards, cost-effective, readily available components and user convenience.
      </>
    ),
  },
  {
    title: 'Open Source',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Permissive license allow people to use or modify more easily and freely.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
