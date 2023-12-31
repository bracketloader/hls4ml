#!/bin/bash

VIVADO_INSTALL_DIR=/opt/Xilinx
VIVADO_VERSION=2017.2

# If running in docker image we would first need to activate the proper conda environment
#. activate hls4ml-py36

# Convert models in pytorch-models.txt
./convert-pytorch-models.sh -x -p 3 -f pytorch-models.txt

# Same for Python 2
#. activate hls4ml-py27
./convert-pytorch-models.sh -x -p 2 -f pytorch-models.txt

# Alternatively, pytorch-to-hls script can be called, with the model name(s) specified, i.e.:
#./pytorch-to-hls.sh -p 3 two_layer_model three_layer_model
#./pytorch-to-hls.sh -p 2 two_layer_model three_layer_model

# Check if there is any difference between files generated by Python 2 and Python 3
# Not needed if there were no changes in pytorch-to-hls.py or hls-writer.py
./py-diff.sh -r 2

# Build the projects generated by pytorch-to-hls script.
# Remove parameter -s to disable synthesis. -p controls the number of parallel tasks
./build-prj.sh -i ${VIVADO_INSTALL_DIR} -v ${VIVADO_VERSION} -c -s -p 2

# Go through the generated reports and print out basic information.
# Reports are available if synthesis is enabled.
./gather-reports.sh -b

# Clean-up at the end
#./cleanup.sh
