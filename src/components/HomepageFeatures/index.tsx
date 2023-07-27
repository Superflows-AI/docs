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
    Png: require('@site/static/img/docs/homepage/1-upload.png').default,
    description: (
      <>
        Just upload an API Spec, connect your API, and get a functional 
        assistant for your product
      </>
    ),
  },
  {
    title: 'Developer Dashboard',
    Png: require('@site/static/img/docs/homepage/2-dash.png').default,
    description: (
      <>
        Configure and evaluate your assistant in a simple to use developer dashboard
      </>
    ),
  },
  {
    title: 'Easy Integration',
    Png: require('@site/static/img/docs/homepage/3-integrate.png').default,
    //Svg: require('@site/static/img/3-deploy.svg').default,
    description: (
      <>
          Integrate your assistant into your product with a few lines of code
      </>
    ),
  },
];

function Feature({title, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
            <h3 style={{margin: 0}}>{title}</h3>
            <p style={{"margin-bottom": "5px"}}>{description}</p>
        </div>
        <div className="text--center">
          <img src={Png} style={{"margin-bottom": "10px", "border-radius": "0.375rem", "object-fit": "cover", "border-width": "2px", borderColor: "#94a3b8", borderStyle: "solid"}} className={styles.featurePng} role="img" />
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
