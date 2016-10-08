import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_id: 'jobs.body_results.selected.id',
  }, {
    body_results_rowClicked: 'jobs.body_results_rowClicked',
  },
  class BodyResultsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((item) => (
        <tr
          key={item.id}
          onClick={() => this.props.body_results_rowClicked({ id: item.id })}
          className={this._getSelectedClass(item.id)}
        >
          <td>{item.id}</td>
          <td>{item.created_at}</td>
        </tr>
      ), obj_list);
    };

    render() {
      return (
        <section className="tableListContainer">
          <table className="tableList tableListClicable">
            <thead>
            <tr>
              <th>body_result_selected_id</th>
              <th>created_at</th>
            </tr>
            </thead>
            <tbody>
            {this._renderRow(this.props.obj_list)}
            </tbody>
          </table>
        </section>
      );
    }

    _getSelectedClass(id) {
      if (this.props.selected_id === id) {
        return 'selectedItem';
      } else {
        return null;
      }
    }
  }
);