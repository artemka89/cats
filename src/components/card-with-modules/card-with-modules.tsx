import { useState, type FC } from "react";

import styles from "./card-with-modules.module.css";

import type { Cat } from "../../shared/api/types";
import { useFetch } from "../../shared/hooks/useFetch";
import { API_ENDPONTS } from "../../shared/api/constants";
import { Checkbox } from "./checkbox/checkbox";
import clsx from "clsx";

export const CardWithModules: FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setAutoRefresh] = useState(false);

  const { data, isLoading, refetch, start, stop } = useFetch<Cat[]>({
    url: API_ENDPONTS.randomImage,
  });

  const handleAutoRefresh = (checked: boolean) => {
    setAutoRefresh(checked);
    if (checked) {
      start(5000);
    } else {
      stop();
    }
  };

  return (
    <div className={styles.card}>
      <Checkbox
        label="Enabled"
        checked={isEnabled}
        onChange={(checked) => setIsEnabled(checked)}
      />
      <Checkbox
        label="Auto-refresh every 5 seconds"
        checked={isAutoRefresh}
        onChange={handleAutoRefresh}
      />

      <button
        disabled={!isEnabled}
        onClick={() => refetch()}
        className={styles.button}
      >
        Get cat
      </button>
      <div></div>
      {isLoading ? (
        <div className={clsx(styles.imageWrapper, styles.skeleton)} />
      ) : (
        data?.map((item) => (
          <div key={item.id} className={styles.imageWrapper}>
            <img
              key={item.id}
              src={item.url}
              alt={"cat image"}
              className={styles.image}
            />
          </div>
        ))
      )}
    </div>
  );
};
