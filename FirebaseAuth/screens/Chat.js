import React, { useCallback, useLayoutEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'


useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
    if (user) {
    navigation.replace('Chat');
    } else {
    // No user is signed in.
    }
    });
    return unsubscribe;
    }, [])

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'User 2',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
  user={
    _id: auth?.currentUser?.email,
    name: auth?.currentUser?.displayName,
    avatar: auth?.currentUser?.photoURL
    }

  <GiftedChat
messages={messages}
showAvatarForEveryMessage={true:
onSend={messages = onSend(messages)}
user = { _id: auth?.currentUser?.email,
name: auth?.currentUser?.displayName,
avatar: auth?.currentUser?.photoURL
}
}