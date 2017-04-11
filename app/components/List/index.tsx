import React = require('react');

const styles = require('./styles.css');
import ListItem from 'components/ListItem';

interface IListProps {
  component: React.ComponentClass<any> | React.StatelessComponent<any>;
  items?: any[];
}

class List extends React.Component<IListProps, {}> {
  public render() {
    const ComponentToRender = this.props.component;
    let content: JSX.Element|JSX.Element[] = (<div />);

    // If we have items, render them
    if (this.props.items) {
      content = this.props.items.map((item, index) => (
        <ComponentToRender key={`item-${index}`} item={item}/>
      ));
    } else {
      // Otherwise render a single component
      content = (<ComponentToRender />);
    }

    return (
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {content}
        </ul>
      </div>
    );
  }
}

export default List;
