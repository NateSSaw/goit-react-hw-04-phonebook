import {Component} from 'react';
import css from 'components/Filter/Filter.module.css'

export default class Filter extends Component {
    onChange = (e) => {
        const { updateFilter } = this.props;
        
        updateFilter(e.target.value);
    }

    render() {
        const { getFilterValue } = this.props;
        return <div><label className={css.label}>Find contacts by name<input type="text" className={css.input} onChange={this.onChange} value={getFilterValue() } /></label></div>
    }
}