import { Route } from 'react-router-dom';

function RoutingSystem() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
}
