import { Router } from "express";

const router = Router();

router.post("/product", (req, res) => {
  res.json({ message: "hello" });
});
router.get("/product", (req, res) => {
  res.json({ message: "hello product" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

router.post("/update", () => {});
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

router.post("/updatepoint", () => {});
router.get("/updatpointe", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
