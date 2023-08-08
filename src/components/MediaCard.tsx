import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  id: number;
  name?: string;
  description?: string;
  liveLink?: string;
  githubLink?: string;
  image?: string[];
}

export default function MediaCard({
  id = 0,
  name = "Default",
  description = "This is the default description",
  githubLink = "https://github.com/hewitson-j",
  image = ["https://static.thenounproject.com/png/2775987-200.png", "No Image"],
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
        <Button size="small">See more</Button>
        <Button size="small" href={githubLink}>
          Repository
        </Button>
      </CardActions>
    </Card>
  );
}
