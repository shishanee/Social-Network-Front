import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Group.module.scss";
import GroupHeader from "./GroupHeader";
import GroupDiscription from "./GroupDiscription";
import GroupFollowers from "./GroupFollowers";
import { AppDispatch, RootState } from "../../app/store";
import { getOneGroups } from "../../features/groupSlice";
import GroupPoster from "./GroupPoster";

const GroupMore: React.FC = (): JSX.Element => {
  const userId = useSelector((state: RootState) => state.user.user._id);
  const groups = useSelector((state: RootState) => state.group.oneGroup);
  const { id } = useParams();
  const groupAdmin = groups.user;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOneGroups(id));
  }, []);

  return (
    <div>
      <GroupHeader />
      <div className={styles.groupBody}>
        {userId == groupAdmin ? <GroupPoster /> : null}
        <div>
          <div className={styles.posts}></div>
          <GroupDiscription />
          <GroupFollowers />
        </div>
      </div>
    </div>
  );
};

export default GroupMore;
