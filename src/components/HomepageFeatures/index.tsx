import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple Setup',
    Png: require('@site/static/img/1-api-spec.png').default,
    //Svg: require('@site/static/img/1-api-spec.svg').default,
    description: (
      <>
        Just upload an API Spec, connect your API, and get a functional 
        assistant for your product
      </>
    ),
  },
  {
    title: 'Low-code Control Dashboard',
    Png: require('@site/static/img/2-evaluate.png').default,
    description: (
      <>
        Configure and evaluate your assistant in a simple to use dashboard
      </>
    ),
  },
  {
    title: '1-Click Deployment',
    Png: require('@site/static/img/3-deploy.png').default,
    //Svg: require('@site/static/img/3-deploy.svg').default,
    description: (
      <>
        Deploy Superflows to Vercel in 1-click
      </>
    ),
  },
];

function Feature({title, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} className={styles.featurePng} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
