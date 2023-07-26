'use strict';

var react = require('react');
var router = require('next/router');
var reactRouterDom = require('react-router-dom');

const useManualRouteChange = () => {
  const router$1 = router.useRouter();
  const location = reactRouterDom.useLocation();
  const history = reactRouterDom.useHistory();

  const nextPath = router$1.asPath;
  const reactPath = location.pathname;

  react.useEffect(() => {
    if (nextPath !== reactPath) {
      router$1.push(reactPath);
    }
  }, [reactPath]);

  react.useEffect(() => {
    if (nextPath !== reactPath) {
      history.push(nextPath);
    }
  }, [nextPath]);
};

module.exports = useManualRouteChange;
