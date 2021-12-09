import React from 'react';
import { IPostModalCommentsItemNameProps } from './@types/postModalCommentsItemName';

const PostModalCommentsItemName = (props: IPostModalCommentsItemNameProps) => (
  <div className="post-modal-comments__name">
    {`${props.firstName} ${props.lastName}`}
  </div>
);

export default PostModalCommentsItemName;
