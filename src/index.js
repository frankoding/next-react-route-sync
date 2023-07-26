import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useManualRouteChange = () => {
  const router = useRouter();
  const location = useLocation();
  const history = useHistory();

  const nextPath = router.asPath;
  const reactPath = location.pathname;

  useEffect(() => {
    if (nextPath !== reactPath) {
      router.push(reactPath);
    }
  }, [reactPath]);

  useEffect(() => {
    if (nextPath !== reactPath) {
      history.push(nextPath);
    }
  }, [nextPath]);
};

export default useManualRouteChange;
