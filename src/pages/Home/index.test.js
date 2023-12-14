import {
  fireEvent,
  render,
  screen,
  getByTestId,
  getByAltText,
} from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

// Premier test d'integration :
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    expect(screen.getByTestId("Header")).toBeInTheDocument();
    expect(screen.getByTestId("Main")).toBeInTheDocument();
    expect(screen.getByTestId("Slider")).toBeInTheDocument();
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    expect(screen.getByText("Samira")).toBeInTheDocument();
    expect(screen.getByText("Jean-baptiste")).toBeInTheDocument();
    expect(screen.getByText("Isabelle")).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    render(<Home />);
    expect(screen.getByTestId("Footer")).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    expect(screen.getByTestId("lastEven")).toBeInTheDocument();
  });
});

// Deuxiéme test d'integration :
describe("Page Integration Test Suites", () => {
  it("should render the footer", async () => {
    render(<Home />);
    expect(getByTestId(document.body, "Footer")).toHaveTextContent(
      "Notre derniére prestation"
    );
  });
  it("should render the main", async () => {
    render(<Home />);
    expect(getByTestId(document.body, "Main")).toHaveTextContent(
      "Nous organisons des événements sur mesure partout dans le monde"
    );
  });
  it("should render the menu", async () => {
    render(<Home />);
    expect(getByTestId(document.body, "Menu")).toHaveTextContent(
      "Nos réalisations"
    );
  });
});

// Troisieme test d'integration:
// tout d'abord creer les imageAlt des photos de notre équipe qui n'existaient pas dans home.js
describe("pictures of people Integration Test Suites", () => {
  it("should render the picture of Samira", async () => {
    render(<Home />);
    const imageDeSamira = getByAltText(document.body, "photo de Samira");
    expect(imageDeSamira).toBeInTheDocument();
  });
  it("should render the picture of JB", async () => {
    render(<Home />);
    const imageDeJb = getByAltText(document.body, "photo de JB");
    expect(imageDeJb).toBeInTheDocument();
  });
  it("should render the altpicture of Alice", async () => {
    render(<Home />);
    const imageDeAlice = getByAltText(document.body, "photo de Alice");
    expect(imageDeAlice).toBeInTheDocument();
  });
});
