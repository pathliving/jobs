import React, {useState} from 'react';
import {View} from 'react-native';
import {COLORS} from '../../constants/theme';
import ActionRound from '../Action/ActionRound/ActionRound';
import Description from '../Description/Description';
import Typography from '../Typography/Typography';
import {styles} from './styles';

const Tabs = ({job}) => {
  const tabs = job.job_highlights;
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <View style={styles.tabs}>
      <View style={styles.nav}>
        {Object.entries(tabs).map(([key]) => (
          <View style={styles.tab} key={key}>
            <ActionRound appearance={activeTab === key ? COLORS.primary : COLORS.azure}
                         onPress={() => setActiveTab(key)}>
              <Typography>{key}</Typography>
            </ActionRound>
          </View>
        ))}
      </View>
      <View>
        <Description activeTab={activeTab} tabs={tabs}/>
      </View>
    </View>
  );
};

export default Tabs;
