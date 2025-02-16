import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateClassRequest from '@/models/msg/ecocredit/msg_create_class_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateClassRequest: FC<{ message: MsgCreateClassRequest }> = (props) => {
  const { message } = props;

  const designer = useProfileRecoil(message.designer);
  const designerMoniker = designer ? designer?.name : message.designer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateClassRequest"
        components={[<Name address={message.designer} name={designerMoniker} />]}
      />
    </Typography>
  );
};

export default CreateClassRequest;
