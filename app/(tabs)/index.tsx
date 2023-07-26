import * as React from 'react';
import { 
  SafeAreaView, 
  ScrollView,  
  Platform,
  RefreshControl,
  Text
} from 'react-native';
import Lottie from 'lottie-react-native';
import { ThreadsContext } from '../../context/thread-context';
import ThreadsItem from '@/components/ThreadsItem';



export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads  = React.useContext(ThreadsContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 })
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
            progressBackgroundColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require('../../lottie-animations/animation_lkj8e56d.json')}
          loop={false}
          autoPlay={true}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

