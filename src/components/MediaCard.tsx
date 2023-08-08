import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  id: string;
  name?: string;
  description?: string;
  liveLink?: string;
  githubLink?: string;
  image?: string[];
  detailsUrl: string;
}

export default function MediaCard({
  name = "Default",
  description = "This is the default description",
  githubLink = "https://github.com/hewitson-j",
  liveLink,
  image = ["https://static.thenounproject.com/png/2775987-200.png", "No Image"],
  detailsUrl,
}: MediaCardProps) {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image[0]} title={image[1]} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {detailsUrl && (
          <Button size="small" href={detailsUrl}>
            See More
          </Button>
        )}
        {githubLink ? (
          <Button size="small" href={githubLink}>
            Repository
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
