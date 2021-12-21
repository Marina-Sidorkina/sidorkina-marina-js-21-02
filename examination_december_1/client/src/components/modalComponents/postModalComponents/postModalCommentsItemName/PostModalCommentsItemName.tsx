import React from 'react';
import { IPostModalCommentsItemNameProps } from './@types/postModalCommentsItemName';
import styles from './PostModalCommentsItemName.module.scss';

const PostModalCommentsItemName = (props: IPostModalCommentsItemNameProps) => (
  <div className={styles.name}>
    {`${props.firstName} ${props.lastName}`}
  </div>
);

export default PostModalCommentsItemName;
