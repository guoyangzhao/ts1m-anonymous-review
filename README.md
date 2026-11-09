# TS-1M: Anonymous Project Page

Traffic Sign Recognition in Autonomous Driving: Dataset, Benchmark, and Field Experiment.

This repository contains the static project website for TS-1M, a globally collected traffic sign dataset with 454 categories and a diagnostic benchmark of 19 models.

- 1,267,558 image samples, including offline augmentation.
- 1,033,947 training samples and 233,611 test samples.
- Cross-region/cross-dataset transfer, rare-class recognition, low-clarity recognition, and classification with semantic descriptions.
- An on-road semantic-mapping case study with 34 registered signs along an approximately 1.4 km route.

The website is self-contained: all styles, scripts, and figures use relative local paths. It requires no package installation or build step. Five HTML result tables and `benchmark-results.json` contain matching values from the associated manuscript.

## Local preview

Run from this repository's root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`.

## Website entry point

Use `index.html` at the repository root. `.nojekyll` allows the files to be served directly by GitHub Pages. All website files should stay together with their directory structure intact.

## Resources

This snapshot contains the website, not the dataset images, model checkpoints, or training code. Google Drive and Baidu Netdisk download mirrors are configured in `resource-links.js` and displayed at the top of the page and in Resources. The Baidu extraction code is `fjsy`.

## License

The website's content retains the project's CC BY-SA 4.0 notice. Dataset and third-party content licensing are separate; this repository does not grant additional rights to those materials. See `LICENSE`.
