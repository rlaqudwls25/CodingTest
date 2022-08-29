function solution(kind, plays) {
  const kindMap = new Map();

  kind
    .map((kinds, index) => [kinds, plays[index]])
    .forEach(([kinds, plays], index) => {
      const data = kindMap.get(kinds) || { total: 0, songs: [] };
      kindMap.set(kinds, {
        total: data.total + plays,
        songs: [...data.songs, { plays, index }]
          .sort((a, b) => b.plays - a.plays)
          .slice(0, 2),
      });
    });

  return [...kindMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.index);
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
