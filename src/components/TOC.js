import React, { Component } from 'react';

// table of content (목차)
class TOC extends Component {   
    shouldComponentUpdate(newProps, newState) {
        console.log('TOC shouldComponentUpdate', this.props.data, newProps.data);
        if(this.props.data === newProps.data) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                        >{data[i].title}</a>
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                {lists}
            </nav>
        );
    }
}

export default TOC;