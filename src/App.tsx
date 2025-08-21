import React from 'react';

type State = {
  litters: string;
};

class KeyBord extends React.Component {
  state: Readonly<State> = {
    litters: '',
  };

  handleDocumentKeyBoard = (event: KeyboardEvent) => {
    this.setState({ litters: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleDocumentKeyBoard);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleDocumentKeyBoard);
  }

  render(): React.ReactNode {
    const { litters } = this.state;

    return (
      <div>
        {litters ? (
          <p className="App__message">The last pressed key is [{litters}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <KeyBord />
  </div>
);
