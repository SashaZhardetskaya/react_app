import React, {Component} from "react"
import PieChart from "react-svg-piechart"

import './PieCharts.css';

export default class Piechart extends Component {
    constructor() {
        super();

        this.state = {
            expandedSector: null,
        };
    }

    handleMouseEnterOnSector = (sector) => {
        this.setState({expandedSector: sector})
    };

    render() {

        const accounts = this.props.data;

        const reducedAccountsArr = accounts.reduce((acc, item) => {
            let accByCategory = acc.find(x => x.category === item.category);
            if(accByCategory) {
                accByCategory.amount += item.amount;
            } else {
                acc.push({
                    amount: item.amount,
                    category: item.category,
                    color: item.color
                });
            }
            return acc;
        }, []);

        const data = reducedAccountsArr.map((obj) => {
            obj.value = obj.amount; //the name of thw column must be 'value' for plugin
            return obj;
        });


        const {expandedSector} = this.state;

        return (
            <div>
                <PieChart
                    className = "pie-charts"
                    data={ data }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
                <div className="charts__description">
                    {
                        data.map((element, i) => (
                            <div key={i}>
                                <span style={{background: element.color}}></span>
                                <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                    {element.category} : {element.amount}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

