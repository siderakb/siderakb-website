import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ErgoSNM',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
      A split ergonomic keyboard with trackball.
      </>
    ),
  },
  {
    title: 'Calcite',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
      A 52 keys ortho Choc low profile switch keyboard.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
