import React, { useEffect, useCallback } from 'react';
import { Flex, Spinner, Text, Box } from '@chakra-ui/core';

function MicroFrontend({ name, host }) {
  const mfRenderMethodName = `render${name}`;
  const mountMicroFrontend = useCallback(() => {
    return new Promise((resolve, reject) => {
      if(!window[mfRenderMethodName]) {
        fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const scriptPromises = [];

          manifest.entrypoints.forEach((entry, index) => {
            const scriptId = `${name}-${index}`;

            if(!document.getElementById(scriptId)) {
              const scriptTag = document.createElement('script');
          
              scriptTag.id = `${name}-${index}`;
              scriptTag.src = `${host}/${entry}`;
              scriptPromises.push(
                new Promise(resolve => {
                  scriptTag.onload = resolve;
                })
              )
              
              document.body.appendChild(scriptTag);
            }
          });

          Promise.all(scriptPromises)
                 .then(() => resolve());
        })
        .catch(err => {
          reject(err);
        });
      }
      else {
        resolve();
      }
    });
  }, [name]);

  useEffect(() => {
    mountMicroFrontend().then(() => {
      window[mfRenderMethodName](name);
    });
  }, [name]);

  return (
    <main id={name}>
      <Flex justifyContent={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </main>
  );
}

export default MicroFrontend;
