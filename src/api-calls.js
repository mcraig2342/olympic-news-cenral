export const fetchAllArticles = async () => {
	return await fetch(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=7cmW2bTtZsyORJ4AO6sB8RJkAJh34ji4`, {
	})
}
