import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'


class Feature extends Component {

    render() {
        const {feature, idx} = this.props;
        const featureHash = feature + '-' + idx;
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.props.selected.name}
                        onChange={e => this.props.updateFeature(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
                </div>
            );
        });

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
}

export default Feature;