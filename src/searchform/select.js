import React from 'react';

class FormSelect extends React.Component {

    render() {
        const options = [];
        options.push(<option key="" value="">{this.props.placeholder}</option>);
        
        this.props.options.length && this.props.options.forEach((option) => {
            options.push(
                <option key={option.value} value={option.name}>{option.name}</option>
            );
        });        
        
        return (
            <React.Fragment>    
                <div className={'form-group row'}>
                    <label htmlFor={this.props.name} className={'col-3 col-form-label text-right'}>{this.props.label}:</label>
                    <div className={'col-9'}>
                        <select className={'form-control form-control-sm'} id={this.props.name} name={this.props.name}>
                            {options}
                        </select>
                    </div>
                </div>
            </React.Fragment>    
        );
    }
}

export default FormSelect;
