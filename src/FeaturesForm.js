import React, { Component } from 'react';
import Feature from './Feature';


class FeaturesForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return(
        <Feature 
          feature={feature}
          idx={idx}
          options={this.props.features[feature]}
          selected={this.props.selected[feature]}
          updateFeature={this.props.updateFeature} />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default FeaturesForm;


