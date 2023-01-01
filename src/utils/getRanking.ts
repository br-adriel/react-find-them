import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { Highscore } from '../global/types';
import { db } from '../services/firebase.config';

export async function getRanking(level = 'all') {
  const matchesRef = collection(db, 'matches');
  if (level === 'all') {
    const q = query(matchesRef, orderBy('points', 'desc'), limit(30));
    const data = await getDocs(q);
    const matches = data.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      } as unknown as Highscore;
    });
    return matches;
  }
  const q = query(
    matchesRef,
    where('level.id', '==', level),
    orderBy('points', 'desc'),
    limit(30)
  );
  const data = await getDocs(q);
  const matches = data.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    } as unknown as Highscore;
  });
  return matches;
}
