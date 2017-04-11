import React = require('react');

const styles = require('./styles.css');

interface IListItemProps {
  className?: string;
  item?: any;
}

class ListItem extends React.Component<IListItemProps, {}> {
  public render() {
    return (
      <li className={this.props.className || styles.item}>
        <div className={styles.itemContent}>
          {this.props.item}
        </div>
      </li>
    );
  }
}

export default ListItem;
