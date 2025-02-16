import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';
import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';

const AvatarName: FC<AvatarName> = ({
  className,
  address,
  name,
  imageUrl,
  href = ACCOUNT_DETAILS,
}) => {
  const { classes, cx } = useStyles();
  return (
    <Link shallow href={href(address || name)}>
      <div className={cx(classes.root, className)}>
        <Avatar address={address} imageUrl={imageUrl ?? undefined} />
        <Typography variant="body1">{name}</Typography>
      </div>
    </Link>
  );
};

export default AvatarName;
