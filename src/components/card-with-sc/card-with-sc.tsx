import { useState, type FC } from "react";
import { Card, CardButton, Image, ImageWrapper, Skeleton } from "./styled";
import { useFetch } from "../../shared/hooks/useFetch";
import type { Cat } from "../../shared/api/types";
import { API_ENDPONTS } from "../../shared/api/constants";
import { Checkbox } from "./checkbox/checkbox";

export const CardComponent: FC = () => {
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
    <Card>
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

      <CardButton disabled={!isEnabled} onClick={() => refetch()}>
        Get cat
      </CardButton>

      {isLoading ? (
        <Skeleton height="200px" />
      ) : (
        data?.map((cat) => (
          <ImageWrapper>
            <Image src={cat.url} alt={cat.id} />
          </ImageWrapper>
        ))
      )}
    </Card>
  );
};
