import React, {useEffect, useRef, useState} from "react";
import "./UsersList.scss";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";
import helper from "../../hocs/helper/helper";
import { IDummyUser } from "../../@types/interfaces/dummyApi";
import usersListStore from "../../stores/usersList";
import { loadUsersListAction } from "../../actions/usersList";

const UsersList = (props: IUsersListProps) => {
  const [list, setList] = useState([] as IDummyUser[]);
  const { currentPage, perPageLimit, setIsLoading, setShowNavItems, setCurrentMenuItem, setItemsAmount } = props;
  const isUnmounted = useRef(false);

  useEffect(() => {
    isUnmounted.current = false;
    setShowNavItems(true);
    setCurrentMenuItem("main");

    usersListStore.on("change", () => {
      if(!isUnmounted.current) {
        setList(usersListStore.getUsers());
        setIsLoading(usersListStore.getIsLoading());
        setItemsAmount(usersListStore.getTotal());
      }
    })

    loadUsersListAction(currentPage, perPageLimit);

    return () => {
      isUnmounted.current = true;
    };
  }, [currentPage, perPageLimit, setCurrentMenuItem, setIsLoading, setShowNavItems]);

  const elements = usersListStore.getIsLoading() ? null : list.map((item, index) => {
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
