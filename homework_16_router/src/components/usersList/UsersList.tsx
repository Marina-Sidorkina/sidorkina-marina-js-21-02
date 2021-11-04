import React, {useEffect, useRef, useState} from "react";
import "./UsersList.scss";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";
import helper from "../../hocs/helper/helper";
import {getUsersList} from "../../api/dummyApi";
import { IDummyApiResponse, IDummyUser } from "../../@types/interfaces/dummyApi";

const UsersList = (props: IUsersListProps) => {
  const [list, setList] = useState([] as IDummyUser[]);
  const { currentPage, perPageLimit, setIsLoading, setItemsAmount } = props;
  const isUnmounted = useRef(false);

  useEffect(() => {
    props.setShowNavItems(true);
  }, [props])

  useEffect(() => {
    const updateList = (data: IDummyApiResponse) => {
      if(!isUnmounted.current) {
        setList(data.data);
        setItemsAmount(data.total)
        setIsLoading(false);
      }
    }

    isUnmounted.current = false;

    setIsLoading(true);

    getUsersList(currentPage - 1, perPageLimit, updateList, console.error);

    return () => {
      isUnmounted.current = true;
    };
  }, [ currentPage, perPageLimit, setIsLoading, setItemsAmount ]);

  const elements = list.map((item, index) => {
    const UserWithHelper = helper(User, item.id);
    return (
      <li className="users-list__item" key={item.id}>
        <UserWithHelper id={item.id}
                        title={item.title}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        picture={item.picture}
                        index={index} />
      </li>
    )
  });

  return (
    <ul className="users-list main__users-list">
      { elements }
    </ul>
  );
}

export default UsersList;
