import { useState } from 'react';
import Header from './Header';
import Content from './assets/Content';

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState('');

  function toggleContent(index) {
    if (activeIndex === index) {
      setActiveIndex('');
    } else {
      setActiveIndex(index);
    }
  }

  const items = topics.map((topic, index) => (
    <div key={topic.id}>
      <Header header={topic.header} onShow={() => toggleContent(index)} />
      <Content content={topic.description} isActive={activeIndex === index} />
    </div>
  ));

  return <>{items}</>;
}
