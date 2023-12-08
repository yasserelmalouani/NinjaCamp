/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// => [, 1, 2, 3, 4]
const treeHeight = Array.from({length: 5}, (_, i) => i + 1);

// => [[1],[1,2],[1,2,3],[1,2,3,4],[1,2,3,4,5]]
const XMAS_TREE = treeHeight.map(singleRow => {
  return Array.from({length: singleRow}, (_, i) => i + 1);
});
const XMAS_TREE_WITH_STEM = [...XMAS_TREE, ...[XMAS_TREE[0]]];
const App: React.FC = () => {
  const renderXmasTree = useMemo(() => {
    return XMAS_TREE_WITH_STEM.map((row, index) => {
      return (
        <View style={styles.singleRowContainer}>
          {row.map(_ => (
            <View
              style={[
                styles.singleElement,
                index === XMAS_TREE_WITH_STEM.length - 1
                  ? styles.stemElement
                  : null,
              ]}
            />
          ))}
        </View>
      );
    });
  }, []);

  return <SafeAreaView style={styles.container}>{renderXmasTree}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  singleElement: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    transform: [{rotate: '45deg'}],
    backgroundColor: 'green',
  },
  stemElement: {
    backgroundColor: '#662824',
    transform: [{rotate: '90deg'}],
  },
});

export default App;
